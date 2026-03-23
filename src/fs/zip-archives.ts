// Portions of this file are Copyright 2021 Google LLC, and licensed under GPL2+. See COPYING.

import { Symlinks } from "./filesystem";

export type ZipArchives = {
  [name: string]: {
    deployed?: boolean,
    description?: string,
    gitOrigin?: {
      repoUrl: string,
      branch: string,
      include: {
        glob: string | string[],
        ignore?: string | string[],
        replacePrefix?: {[path: string]: string},
      }[]
    }
    symlinks?: Symlinks,
    docs?: {[name: string]: string}
  }
};

export const zipArchives: ZipArchives = {
  'fonts': {},
  'openscad': {
    description: 'OpenSCAD',
    gitOrigin: {
      branch: 'master',
      repoUrl: 'https://github.com/openscad/openscad',
      include: [{glob: ['examples/*.scad', 'LICENSE']}],
    },
    docs: {
      'CheatSheet': 'https://openscad.org/cheatsheet/index.html',
      'Documentation': 'https://openscad.org/documentation.html',
    },
  },
};

export const deployedArchiveNames =
  Object.entries(zipArchives)
    .filter(([_, {deployed}]) => deployed == null || deployed)
    .map(([n]) => n);
