class PageController < ApplicationController
  
  # caches_page :home, :about, :contact
  
  # GET /
  def home
    @id = "home"
  end
  
  # GET /about
  def about
    @id = "about"
    @title = "About Us"
  end

  # GET /contact
  def contact
    @id = "contact"
    @title = "Contact Us"
  end

end
