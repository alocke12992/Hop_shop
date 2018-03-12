50.times do 
  Beer.create(
    name: Faker::Beer.name,
    style: Faker::Beer.style,
    ibu: Faker::Beer.ibu, 
    abv: Faker::Beer.alcohol, 
  )
end 