module.exports = {
  name: 'boner-jamz',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/boner-jamz',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
