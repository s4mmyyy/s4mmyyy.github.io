// 代码块功能增强
document.addEventListener('DOMContentLoaded', function() {
  // 为每个代码块添加复制按钮
  const codeBlocks = document.querySelectorAll('.highlight');
  
  codeBlocks.forEach(function(block) {
    // 创建复制按钮
    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn';
    copyBtn.innerHTML = '复制';
    copyBtn.style.cssText = `
      position: absolute;
      top: 8px;
      right: 8px;
      padding: 4px 8px;
      background: #007acc;
      color: white;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      font-size: 12px;
    `;
    
    // 添加复制功能
    copyBtn.addEventListener('click', function() {
      const code = block.querySelector('code');
      const text = code.textContent;
      
      navigator.clipboard.writeText(text).then(function() {
        copyBtn.innerHTML = '已复制!';
        setTimeout(function() {
          copyBtn.innerHTML = '复制';
        }, 2000);
      });
    });
    
    block.style.position = 'relative';
    block.appendChild(copyBtn);
  });
});