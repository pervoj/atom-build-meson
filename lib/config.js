'use babel';

export default {
    buildDir: {
        type: 'string',
        default: '_build',
        title: 'Build directory name',
        description: 'Set how will be called output build directory.\n'+'Option: Use {project_name} to create builds in with the project\'s name.'
    },
    installPrefix: {
        type: 'string',
        default: '',
        title: 'Installation prefix',
        description: 'Leave empty for default prefix'
    }
}
