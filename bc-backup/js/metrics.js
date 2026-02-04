// umami-tracker.js
(function() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.defer = true;
    script.src = 'https://metrics.36102025.xyz/apple.js';
    
    // 注入原本在 HTML 标签里的 data- 属性
    script.setAttribute('data-website-id', 'e06c7d20-e6e2-4240-a891-cbfa302a9fe6');
    script.setAttribute('data-host-url', 'https://metrics.36102025.xyz');
    script.setAttribute('data-auto-track', 'true');
    script.setAttribute('data-do-not-track', 'false');
    script.setAttribute('data-cache', 'false');
    script.setAttribute('data-domains', 'bitcomet-backup.36102025.xyz');
    
    // 将脚本插入到 head 中
    var head = document.getElementsByTagName('head')[0];
    if (head) {
        head.appendChild(script);
    }
})();