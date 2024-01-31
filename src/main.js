import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';

const formElem = document.querySelector('.search-form');
const list = document.querySelector('.gallery-list');
const loadMoreBtn = document.querySelector('.js-more-btn');
const loader = document.querySelector('.js-loader');

let page = 1;
let query = null;

function getImage() {
  const BASE_URL = 'https://pixabay.com/api/';

  const params = {
    key: '42111454-a6064c7507ecd0abc8356168a',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page,
  };

  return axios.get(BASE_URL, { params }).then(res => res.data);
}

formElem.addEventListener('submit', onFormSubmit);

async function onFormSubmit(e) {
  e.preventDefault();
  query = e.target.elements.query.value;
  page = 1;

  if (query === '') {
    iziToast.error({
      position: 'topRight',
      message: 'Enter a word to search for',
    });
    return;
  }

  try {
    const result = await getImage();

    if (result.totalHits === 0) {
      iziToast.error({
        position: 'topRight',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    if (page === 1) {
      showLoader();
      list.innerHTML = '';
      renderImgs(result.hits);
      changeBtnStatus(result.totalHits);
      hideLoader();
    }
    e.target.elements.query.value = '';
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}

function imgTemplate({
  largeImageURL,
  webformatURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return ` <li class="picture-card">
<a class="gallary-card-link" href="${largeImageURL}">
  <img src="${webformatURL}" alt="${tags}" />
  <ul class="image-info">
    <li class="image-item-info">
      <p>Likes</p>
      <p>${likes}</p>
    </li>
    <li class="image-item-info">
      <p>Views</p>
      <p>${views}</p>
    </li>
    <li class="image-item-info">
      <p>Comments</p>
      <p>${comments}</p>
    </li>
    <li class="image-item-info">
      <p>Downloads</p>
      <p>${downloads}</p>
    </li>
  </ul>
</a>
</li>`;
}
function imgsTemplate(imgs) {
  return imgs.map(imgTemplate).join('');
}

function renderImgs(imgs) {
  const markup = imgsTemplate(imgs);
  list.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);

async function onLoadMoreBtnClick() {
  page += 1;
  showLoader();
  const result = await getImage();
  renderImgs(result.hits);
  changeBtnStatus(result.totalHits);
  hideLoader();
}

function changeBtnStatus(totalHits) {
  const maxPage = Math.ceil(totalHits / 40);
  if (page >= maxPage) {
    iziToast.info({
      position: 'topRight',
      message: "We're sorry, there are no more posts to load",
    });
    loadMoreBtn.classList.add('is-hidden');
  } else {
    loadMoreBtn.classList.remove('is-hidden');
  }
}

function showLoader() {
  loader.classList.remove('is-hidden');
}
function hideLoader() {
  loader.classList.add('is-hidden');
}

const lightbox = new SimpleLightbox('.gallery-list a', {
  captionDelay: 250,
  captionsData: 'alt',
});
