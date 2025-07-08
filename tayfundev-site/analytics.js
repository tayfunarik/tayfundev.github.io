let v = Number(localStorage.getItem('visitors')||0)+1;
localStorage.setItem('visitors',v);
if(document.getElementById('visitorCount')) document.getElementById('visitorCount').textContent = "Ziyaretçi Sayısı: "+v;
