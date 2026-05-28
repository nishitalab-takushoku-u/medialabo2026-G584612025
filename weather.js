
// 課題3-1 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log("世界の天気（検索結果1件）"); 
  console.log("経度:"+data.coord.lon); 
  console.log("緯度:"+data.coord.lat); 
  console.log("天気:"+data.weather[0].description); 
  console.log("最低気温:"+data.main.temp_min); 
  console.log("最高気温:"+data.main.temp_max); 
  console.log("湿度:"+data.main.humidity);
  console.log("風速:"+data.wind.speed); 
  console.log("風向:"+data.wind.deg); 
  console.log("都市名:"+data.name);
}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  if(document.querySelector('div#result') !== null){
    document.querySelector('div#result').remove();
  }
  let d = document.createElement('div');
  d.id = 'result';
  
  d.classList.add('multi-bg-example');

  let b = document.querySelector('body');
  b.insertAdjacentElement('beforeend', d);

  let h1 = document.createElement('h1');
  h1.textContent = '世界の天気 (検索結果1件)';
  d.insertAdjacentElement('beforeend', h1);

  let h2 = document.createElement('h2');
  h2.textContent = '以下の地域の天候に関する情報を検索して表示します';
  d.insertAdjacentElement('beforeend', h2);
  
  let u = document.createElement('ul');
  let l = document.createElement('li');
  l.textContent = "経度:"+data.coord.lon;
  u.insertAdjacentElement('beforeend', l);

  l = document.createElement('li');
  l.textContent = "緯度:"+data.coord.lat;
  u.insertAdjacentElement('beforeend', l);

  l = document.createElement('li');
  l.textContent = "天気:"+data.weather[0].description;
  u.insertAdjacentElement('beforeend', l);

  l = document.createElement('li');
  l.textContent = "最低気温:"+data.main.temp_min;
  u.insertAdjacentElement('beforeend', l);

  l = document.createElement('li');
  l.textContent = "最高気温:"+data.main.temp_max;
  u.insertAdjacentElement('beforeend', l);

  l = document.createElement('li');
  l.textContent = "湿度:"+data.main.humidity;
  u.insertAdjacentElement('beforeend', l);

  l = document.createElement('li');
  l.textContent = "風速:"+data.wind.speed;
  u.insertAdjacentElement('beforeend', l);

  l = document.createElement('li');
  l.textContent = "風向:"+data.wind.deg;
  u.insertAdjacentElement('beforeend', l);

  l = document.createElement('li');
  l.textContent = "都市名:"+data.name;
  u.insertAdjacentElement('beforeend', l);

  d.insertAdjacentElement('beforeend', u);
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
let b = document.querySelector('#sendRequest');
b.addEventListener('click', sendRequest);


// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
    let s = document.querySelector('select#city');
    let idx = s.selectedIndex;
    let os = s.querySelectorAll('option');
    let o = os.item(idx);

    let genre;
    if (idx === 0) {genre = '360630'};
    if (idx === 1) {genre = '524901'};
    if (idx === 2) {genre = '993800'};
    if (idx === 3) {genre = '1816670'};
    if (idx === 4) {genre = '1850147'};
    if (idx === 5) {genre = '1880252'};
    if (idx === 6) {genre = '2147714'};
    if (idx === 7) {genre = '2643743'};
    if (idx === 8) {genre = '2968815'};
    if (idx === 9) {genre = '3451189'};
    if (idx === 10){genre = '5128581'};
    if (idx === 11){genre = '5368361'};

    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+ genre + '.json';
    
    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
    // サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    // data をコンソールに出力
    console.log(data);

    // data.x を出力
    console.log(data.x);

    console.log(printDom(data));
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること

