// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

//= require jquery3
//= require popper
//= require bootstrap

function openPopup(link)
{
    link.hide();
    window.open(link.href,'exam_dialog','toolbar=no,location=no,menubar=no,scrollbars=yes,resizable=no');
    return false;
}