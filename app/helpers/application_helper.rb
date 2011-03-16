module ApplicationHelper
  
  # Return a title on a per-page basis.
  def title
    base_title = "SiteTemplate"
    if @title.nil?
      base_title
    else
      "#{base_title} | #{@title}"
    end
  end
  
  # Return attributes to add to body tag on a per-page basis
  def page_attrs
    if @id.nil?
      raw ""
    else
      raw " id=\"page_#{@id}\""
    end
  end

end
