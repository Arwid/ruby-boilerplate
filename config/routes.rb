Sitetemplate::Application.routes.draw do
  root :to => "page#home"
  
  match 'home' => 'page#home'
  match 'about' => 'page#about'
  match 'contact' => 'page#contact'
end
