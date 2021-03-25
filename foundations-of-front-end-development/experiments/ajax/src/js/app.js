import $ from 'jquery';

$(function() {
  console.log("We are ready!");

  let container = $('#main-menu');

  function handleMenu() {
    function toggleInfoPanelForElement(event) {
      $(this).siblings('.menu-item-info').toggleClass('is-visible');
    }

    $('.menu-item > a').on('mouseover', toggleInfoPanelForElement);
    $('.menu-item > a').on('mouseout', toggleInfoPanelForElement);
  }

  function buildMenuitem(data) {
    let element, infoPanel;

    element = $(
      '<li class="menu-item">' +
      '<a href="#">' + data.title + '</a>'+
      '<div class="menu-item-info"></div>' +
      '</li>'
    );

    infoPanel = $('div.menu-item-info', element);
    infoPanel.append($('<div>Name: ' + data.product + '</div><div>Score: ' + data.score + '</div>'));

    return element;
  }

  $.get('api/menu.json', function(data) {
    console.dir(data);

    container.empty();

    data[0].infoPanel.forEach(function(menuItem) {
      container.append(buildMenuitem(menuItem));
    }, 'json');

    container.append($('<div class="clearfix"></div>'));
    handleMenu();
  });
});
