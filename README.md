# JavaScript 判斷 PC/手機
###### tags: `JavaScript` `PC/手機`

前端工作經常需要判斷使用者採用甚麼設備上網 PC or 手機，藉以引導到不同版本的網頁去。

[Github程式碼](https://github.com/capeta0507/JS_PC_MOBILE/settings)

javascript 重要指令是 navigator.userAgent 取得設備名稱
下面是相關的指令
```htmlmixed=
<html>
<head>
<title>JS完整获取IE浏览器信息</title>
</head>
<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
<table width="435" border="1" cellspacing="3" cellpadding="0">
  <tr>
    <td>浏览器类型</td>
    <td> 
      <script>document.write(navigator.appName)</script>
    </td>
  </tr>
  <tr>
    <td >浏览器版本</td>
    <td > 
      <script>document.write(navigator.appVersion)</script>
    </td>
  </tr>
  <tr>
    <td>浏览器语言</td>
    <td> 
      <script>document.write(navigator.browserLanguage)</script>
    </td>
  </tr>
  <tr>
    <td >CPU类型</td>
    <td > 
      <script>document.write(typeof(navigator.cpuClass)=="undefined"?"":navigator.cpuClass)</script>
    </td>
  </tr>
  <tr>
    <td>操作系统</td>
    <td> 
      <script>document.write(typeof(navigator.platform)=="undefined"?"":navigator.platform)</script>
    </td>
  </tr>
  <tr>
    <td >系统语言</td>
    <td > 
      <script>document.write(navigator.systemLanguage)</script>
    </td>
  </tr>
  <tr>
    <td>用户语言;</td>
    <td> 
      <script>document.write(navigator.userLanguage)</script>
    </td>
  </tr>
  <tr>
    <td >在线情况</td>
    <td > 
      <script>document.write(navigator.onLine)</script>
    </td>
  </tr>
  <tr>
    <td>屏幕分辨率</td>
    <td>      <script>document.write(window.screen.width+"x"+window.screen.height)</script></td>
  </tr>
  <tr>
    <td>颜色</td>
    <td> <script>document.write(window.screen.colorDepth+"位")</script></td>
  </tr>
  <tr>
    <td>字体平滑</td>
    <td><script>document.write(window.screen.fontSmoothingEnabled)</script></td>
  </tr>
  <tr>
    <td>appMinorVersion</td>
    <td> 
      <script>document.write(navigator.appMinorVersion)</script>
    </td>
  </tr>
  <tr>
    <td >appCodeName</td>
    <td > 
      <script>document.write(navigator.appCodeName)</script>
    </td>
  </tr>
  <tr>
    <td>cookieEnabled</td>
    <td> 
      <script>document.write(navigator.cookieEnabled)</script>
    </td>
  </tr>
  <tr>
    <td >userAgent</td>
    <td > 
      <script>document.write(navigator.userAgent)</script>
    </td>
  </tr>
  <tr>
    <td>javaEnabled</td>
    <td> 
      <script>document.write(navigator.javaEnabled())</script>
    </td>
  </tr>
  <tr>
    <td >taintEnabled</td>
    <td > 
      <script>document.write(navigator.taintEnabled())</script>
    </td>
  </tr>
  <tr>
    <td>connectionType</td>
    <td> 
      <script>document.write(oClientCaps.connectionType)</script>
    </td>
  </tr>
</table>
</body>
</html>
```
PC 環境
![](https://i.imgur.com/h6Hjf04.jpg)

iPhone 環境
![](https://i.imgur.com/4J94j4j.jpg)

Android 環境
![](https://i.imgur.com/x9DF4pY.jpg)

主要是在 userAgent 資訊裡找到對應的關鍵字，就可以判斷是否為手機裝置，否則就是 PC裝置。
```javascript=
var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"); 
```

PC or 手機轉址的程式如下 device.html
```htmlmixed=
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <title>Document</title>
</head>
<body>
    
</body>
<script>
    $(document).ready(function(){
        // 判斷是否為 PC 設備
        if (IsPC()) {
            console.log("Go to PC Page");
            // alert('PC');
            window.location.assign('/pc.html');
        }else{
            console.log("Go to Mobile Page...");
            // alert('手機');
            window.location.assign('/mobile.html')
        }
    })
 
    function IsPC() 
        { 
            var userAgentInfo = navigator.userAgent; 
            // Agents 字串陣列來判斷是否為手機裝置
            var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"); 
            var flag = true; 
            for (var v = 0; v < Agents.length; v++) { 
                let findIndex = userAgentInfo.indexOf(Agents[v]);
                console.log(v,Agents[v],findIndex);
                if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; } 
            } 
            return flag; 
        } 
    </script>
</html>
```
