function showDownloadModal() {
  document.getElementById('downloadModal').style.display = 'block';
}

// 点击模态框外部关闭
window.onclick = function(event) {
  const modal = document.getElementById('downloadModal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.download-btn').addEventListener('click', showDownloadModal);
});