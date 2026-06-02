'use client';

import React, { useState, useMemo } from 'react';
import { Player, mockPlayers, tierColors } from '@/data/mockPlayers';

type GameMode = 'overall' | 'modeA' | 'modeB' | 'modeC' | 'modeD' | 'modeE';
type RegionFilter = 'ALL' | 'NA' | 'EU' | 'AS';

const gameModes: { key: GameMode; label: string }[] = [
  { key: 'overall', label: 'Overall' },
  { key: 'modeA', label: 'Mode A' },
  { key: 'modeB', label: 'Mode B' },
  { key: 'modeC', label: 'Mode C' },
  { key: 'modeD', label: 'Mode D' },
  { key: 'modeE', label: 'Mode E' },
];

export default function Leaderboard() {
  const [selectedMode, setSelectedMode] = useState<GameMode>('overall');
  const [regionFilter, setRegionFilter] = useState<RegionFilter>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  // Get tier for a player based on selected mode
  const getTier = (player: Player, mode: GameMode): string => {
    if (mode === 'overall') {
      return player.overall;
    }
    return player.modes[mode];
  };

  // Sort and filter players
  const sortedPlayers = useMemo(() => {
    const tierRanking: Record<string, number> = {
      HT1: 0,
      HT2: 1,
      HT3: 2,
      HT4: 3,
      HT5: 4,
      MT1: 5,
      MT2: 6,
      MT3: 7,
      MT4: 8,
      MT5: 9,
      LT1: 10,
      LT2: 11,
      LT3: 12,
      LT4: 13,
      LT5: 14,
    };

    let filtered = mockPlayers.filter((player) => {
      const matchesSearch = player.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesRegion =
        regionFilter === 'ALL' || player.region === regionFilter;
      return matchesSearch && matchesRegion;
    });

    return filtered.sort((a, b) => {
      const tierA = getTier(a, selectedMode);
      const tierB = getTier(b, selectedMode);
      return tierRanking[tierA] - tierRanking[tierB];
    });
  }, [selectedMode, regionFilter, searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-white mb-2">TierZenith</h1>
          <p className="text-slate-400 text-lg">
            Competitive Leaderboard & Tier System
          </p>
        </div>

        {/* Game Mode Tabs */}
        <div className="mb-6 flex gap-2 flex-wrap">
          {gameModes.map((mode) => (
            <button
              key={mode.key}
              onClick={() => setSelectedMode(mode.key)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                selectedMode === mode.key
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              {mode.label}
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="mb-6 flex gap-4 flex-col sm:flex-row">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search player name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg bg-slate-700 text-white placeholder-slate-400 border border-slate-600 focus:border-blue-500 focus:outline-none transition"
          />

          {/* Region Filter */}
          <select
            value={regionFilter}
            onChange={(e) => setRegionFilter(e.target.value as RegionFilter)}
            className="px-4 py-2 rounded-lg bg-slate-700 text-white border border-slate-600 focus:border-blue-500 focus:outline-none transition cursor-pointer"
          >
            <option value="ALL">All Regions</option>
            <option value="NA">North America</option>
            <option value="EU">Europe</option>
            <option value="AS">Asia</option>
          </select>
        </div>

        {/* Leaderboard Table */}
        <div className="overflow-x-auto rounded-lg border border-slate-700 shadow-xl">
          <table className="w-full">
            <thead className="bg-slate-950 border-b border-slate-700">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-300">
                  Rank
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-300">
                  Player Name
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-300">
                  Region
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-300">
                  Tier
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {sortedPlayers.length > 0 ? (
                sortedPlayers.map((player, index) => {
                  const tier = getTier(player, selectedMode);
                  const tierColor = tierColors[tier] || '#9CA3AF';

                  return (
                    <tr
                      key={player.id}
                      className="hover:bg-slate-700/50 transition-colors"
                    >
                      <td className="px-4 py-4 text-sm font-bold text-slate-300">
                        #{index + 1}
                      </td>
                      <td className="px-4 py-4 text-sm font-semibold text-white">
                        {player.name}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-400">
                        <span className="inline-block px-3 py-1 rounded-full bg-slate-700 text-slate-300">
                          {player.region}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm">
                        <span
                          className="inline-block px-3 py-1 rounded-lg font-bold text-white"
                          style={{ backgroundColor: tierColor }}
                        >
                          {tier}
                        </span>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    className="px-4 py-8 text-center text-slate-400"
                  >
                    No players found matching your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Results Count */}
        <div className="mt-4 text-slate-400 text-sm">
          Showing {sortedPlayers.length} of {mockPlayers.length} players
        </div>
      </div>
    </div>
  );
}
