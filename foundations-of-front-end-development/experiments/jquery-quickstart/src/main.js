import $ from 'jquery';

function displayInfoPanelForElement(event) {
  $(this).siblings('.menu-item-info').addClass('is-visible');
}

function hideInfoPanelForElement(event) {
  $(this).siblings('.menu-item-info').removeClass('is-visible');
}

function toggleInfoPanelForElement(event) {
  $(this).siblings('.menu-item-info').toggleClass('is-visible');
}

$('.menu-item > a').on('mouseover', displayInfoPanelForElement);
$('.menu-item > a').on('mouseout', hideInfoPanelForElement);
