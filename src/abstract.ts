interface CloudFile {
  getFile: () => string;
}

class KakaoCloudFile implements CloudFile {
  getFile() {
    /* ... */
    return 'kakao-cloud-file';
  }
}

class NaverCloudFile implements CloudFile {
  getFile() {
    /* ... */
    return 'naver-cloud-file';
  }
}

// 업데이트를 한다면 아래만 추가하면 된다.
/* 
class GoogleCloudFile implements CloudFile {
  getFile() {
    return 'google-cloud-file';
  }
}
*/

class DownloadManager {
  // CloudFile로 추상화 했기 때문에 Kakao, Naver 이외의 다른 파일 업데이트가 추가된다 하더라도 이 로직은 그대로 유지된다.
  download(file: CloudFile) {
    return file.getFile();
  }
}

// 개발자가 직접 사용하게 될 함수들

function downloadKakaoFile() {
  const manager = new DownloadManager();
  return manager.download(new KakaoCloudFile());
}

function downloadNaverFile() {
  const manager = new DownloadManager();
  return manager.download(new NaverCloudFile());
}

console.log(downloadKakaoFile());
console.log(downloadNaverFile());
