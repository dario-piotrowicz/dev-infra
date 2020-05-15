/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import * as yargs from 'yargs';

import {buildDiscoverNewConflictsCommand, handleDiscoverNewConflictsCommand} from './discover-new-conflicts/cli';
import {buildMergeCommand, handleMergeCommand} from './merge/cli';

/** Build the parser for pull request commands. */
export function buildPrParser(localYargs: yargs.Argv) {
  return localYargs.help()
      .strict()
      .demandCommand()
      .command('merge <pr-number>', 'Merge pull requests', buildMergeCommand, handleMergeCommand)
      .command(
          'discover-new-conflicts <pr-number>',
          'Check if a pending PR causes new conflicts for other pending PRs',
          buildDiscoverNewConflictsCommand, handleDiscoverNewConflictsCommand)
}

if (require.main === module) {
  buildPrParser(yargs).parse();
}
