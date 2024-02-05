let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let darkModeIcon = document.querySelector('#darkMode-icon');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let ratings = document.querySelectorAll('.ratings');
let likeButton = document.querySelectorAll('#like-button');
let comments = document.querySelectorAll('.comments');
let comment_box = document.querySelectorAll('.comment-box');
let CommentButton = document.querySelectorAll('#comment-section');
let logo = document.querySelector('.img');
darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
    if (darkModeIcon.classList.contains('bx-sun')) {
        logo.src = './logo.png';
    }
    else {
        logo.src = './logo_white.png';
    }
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 200;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }
    })
    let header = document.querySelector('header');
    header.classList.add('sticky', window.scrollY > 100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}
likeButton.forEach((button, index) => {
    if (localStorage.getItem('select' + index) === 'true') {
        ratings[index].classList.add('ratings-selected');
        ratings[index].classList.remove('ratings');
        const likeCount = ratings[index].querySelector('.like-counter');
        likeCount.textContent = 1;
    }
    else{
        ratings[index].classList.remove('ratings-selected');
        ratings[index].classList.add('ratings');
        const likeCount = ratings[index].querySelector('.like-counter');
        likeCount.textContent = 0;
    }
    button.onclick = () => {
        if (localStorage.getItem('select' + index) === 'true') {
            ratings[index].classList.remove('ratings-selected');
            ratings[index].classList.add('ratings');
            const likeCount = ratings[index].querySelector('.like-counter');
            likeCount.textContent = 0;
            localStorage.setItem('select' + index, 'false');
        }
        else {
            ratings[index].classList.add('ratings-selected');
            ratings[index].classList.remove('ratings');
            const likeCount = ratings[index].querySelector('.like-counter');
            likeCount.textContent = 1;
            localStorage.setItem('select' + index, 'true');
        }
    }
});
CommentButton.forEach((button, index) => {
    button.onclick = () => {
        if (comments[index].classList.contains('comments-selected')) {
            comments[index].classList.remove('comments-selected');
            comments[index].classList.add('comments');
            comment_box[index].style.display = '';
        }
        else {
            comments[index].classList.remove('comments');
            comments[index].classList.add('comments-selected');
        }
    }
});
