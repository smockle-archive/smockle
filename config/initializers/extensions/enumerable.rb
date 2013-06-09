Enumerable.class_eval do
  def mode
    group_by{|e| e}.values.max_by(&:size).try(:first)
  end
end