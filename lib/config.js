'use babel';

export default {
    buildDir: {
        type: 'string',
        default: '_build',
        title: 'Build directory name',
        description: 'Set how will be called output build directory'
    },
    installPrefix: {
        type: 'string',
        default: '',
        title: 'Installation prefix',
        description: 'Leave empty for default prefix'
    }
}
