const webDataConfig = {
  themeFolder: 'src/appConfig/theme/',
  pay6: { sourceNode: '6', name: 'pay6', clz: 'pay6' },
  pay66: { sourceNode: '66', name: 'pay66', clz: 'pay66' },

  buildRootSourceFolder(root) {
    return this.themeFolder + root.name;
  },
};

export default webDataConfig;