import { File } from './file';

describe('File model', () => {
  it('Test save file model', async () => {
    const file = File.build({
      fileName: 'test.123.mp4',
      originName: 'test',
      mimeType: 'video/mp4',
      thumbnail: 'test',
      size: 23456,
    });

    try {
      await file.save();
    } catch (err) {
      console.log(err);
    }

    const firstInstance = await File.findById(file._id);

    expect(firstInstance._id.toString()).toBe(file._id.toString());
  });
});
