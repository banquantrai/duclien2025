document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const performanceItems = document.querySelectorAll('.performance-item');
    
    // Xử lý tìm kiếm
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        performanceItems.forEach(item => {
            const title = item.querySelector('h2').textContent.toLowerCase();
            const performer = item.querySelector('.performer').textContent.toLowerCase();
            const description = item.querySelector('.description').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || 
                performer.includes(searchTerm) || 
                description.includes(searchTerm)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    }
    
    // Sự kiện click nút tìm kiếm
    searchButton.addEventListener('click', performSearch);
    
    // Sự kiện nhấn Enter trong ô tìm kiếm
    searchInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            performSearch();
        }
    });
    
    // Đặt lại kết quả tìm kiếm khi xóa hết nội dung trong ô tìm kiếm
    searchInput.addEventListener('input', function() {
        if (this.value === '') {
            performanceItems.forEach(item => {
                item.style.display = 'flex';
            });
        }
    });
});
