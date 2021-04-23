'use babel';

import fs from 'fs';
import path from 'path';

export const config = require('./config');

export function provideBuilder() {
    return class MesonProvider {
        constructor(cwd) {
            this.cwd = cwd;
            console.log(cwd);
        }

        getNiceName() {
            return 'Meson Build';
        }

        isEligible() {
            return fs.existsSync(path.join(this.cwd, 'meson.build'));
        }

        settings() {
            let buildDir = null;
            if (atom.config.get('build-meson.buildDir')) {
                buildDir = atom.config.get('build-meson.buildDir');
            } else {
                buildDir = '_build';
            }

            let installPrefix = null;
            if (atom.config.get('build-meson.installPrefix')) {
                installPrefix = ' --prefix ' + atom.config.get('build-meson.installPrefix');
            } else {
                installPrefix = '';
            }

            return [
                {
                    name: 'Meson Configure',
                    exec: 'meson ' + buildDir + installPrefix,
                    sh: true,
                },
                {
                    name: 'Meson Reconfigure',
                    exec: 'meson --reconfigure ' + buildDir + installPrefix,
                    sh: true
                },
                {
                    name: 'Meson Build',
                    exec: 'ninja -C ' + buildDir,
                    sh: true
                },
                {
                    name: 'Meson Build and Install',
                    exec: 'ninja -C ' + buildDir + ' install',
                    sh: true
                }
            ];
        }
    }
};
