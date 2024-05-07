import chokidar from 'chokidar';
import { exec } from 'child_process';

// 监听文件变化
const watcher = chokidar.watch(['src/**/*.vue', 'src/**/*.js', 'src/**/*.css']);

function buildVueApp() {
  return new Promise((resolve, reject) => {
    exec('pnpm build', (error, stdout) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(stdout);
    });
  });
}

watcher.on('change', (path) => {
  console.log(`file ${path}`);
  buildVueApp()
    .then(() => {
      console.log('build success');
    })
    .catch((err) => {
      console.log('build err', err);
    });
});
