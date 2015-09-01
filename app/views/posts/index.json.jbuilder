json.array!(@posts) do |post|
  json.extract! post, :id, :date, :title, :content
  json.url post_url(post, format: :json)
end
