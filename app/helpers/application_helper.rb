module ApplicationHelper

  def seo_title(text)
    content_for :seo_title, text
  end

  def seo_description(text)
    content_for :seo_description, text
  end

  def seo_keywords(text)
    content_for :seo_keywords, text
  end

  def seo_canonical(text)
    content_for :seo_canonical, text
  end

  def title(text)
    content_for :title, text
  end

  # Defines active page so styles can be assigned accordingly
  def get_active(page)
    @active_class = ""
    current_page = []
    case page
      when "MainPage"
        current_page = ["MainPage"]
      else
        current_page = []
    end
    @active_class = "active" if current_page.include?(content_for :title)
  end

  def flash_style_type(flash_type)
    case flash_type
      when "success"
        "success"
      when "error"
        "error"
      when "alert"
        "alert"
      when "notice"
        "notice"
      else
        flash_type.to_s
    end
  end


  # Allows svg image code to be directly embedded in the page file, allows for styling of the svg and reduces http requests
  def embedded_svg(filename, options = {})
    assets = Rails.application.assets
    file = assets.find_asset(filename).body.force_encoding("UTF-8")
    doc = Nokogiri::HTML::DocumentFragment.parse file
    svg = doc.at_css "svg"
    if options[:class].present?
      svg["class"] = options[:class]
    end
    raw doc
  end
end
