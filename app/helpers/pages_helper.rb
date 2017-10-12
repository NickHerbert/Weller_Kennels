module PagesHelper





  def mark_down_changes(name)
    if name.empty?
      "No Banner Message"
    else
      sanitize Kramdown::Document.new(name).to_html
    end
  end
end
