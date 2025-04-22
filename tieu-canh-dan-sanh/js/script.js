// Kích hoạt hiệu ứng fade-in sau khi trang tải xong
document.addEventListener('DOMContentLoaded', function() {
    // Reset animation khi refresh trang
    const avatarItems = document.querySelectorAll('.avatar-item');
    
    // Thêm lớp fade-in để kích hoạt animation
    setTimeout(function() {
        avatarItems.forEach(item => {
            item.classList.add('fade-in');
        });
    }, 100);

    // Đọc danh sách đoàn từ file JSON
    const loadTeamList = () => {
        fetch('data/teams.json')
            .then(response => response.json())
            .then(data => {
                updateAvatarDisplay(data.teams);
            })
            .catch(error => console.error('Error loading team list:', error));
    };

    // Cập nhật hiển thị avatar dựa trên danh sách JSON
    const updateAvatarDisplay = (activeTeams) => {
        const allAvatars = document.querySelectorAll('.avatar-item');
        
        // Đợi hiệu ứng fade-in ban đầu hoàn tất
        setTimeout(() => {
            allAvatars.forEach(avatar => {
                const teamId = avatar.querySelector('.avatar').alt;
                const isActive = activeTeams.some(team => teamId.includes(team));
                
                if (!isActive) {
                    // Nếu avatar không nằm trong danh sách active, thêm hiệu ứng fade-out
                    avatar.classList.add('fade-out');
                } else {
                    // Đảm bảo avatar active không bị ẩn
                    avatar.classList.remove('fade-out');
                }
            });
        }, 2000); // Đợi 2 giây sau khi trang tải để tất cả avatar đều hiển thị trước
    };

    // Tải danh sách đoàn
    loadTeamList();
});