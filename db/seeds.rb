# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "🌱 Seeding..."

# User.create(id: 1, first_name: 'Stephen', last_name: 'Nerby', phone_number: '3302816662', email: 'sanerby@outlook.com', password: 'Password', password_confirmation: 'Password')
# User.create(id: 2, first_name: 'Amanita', last_name: 'Setari', phone_number: '3470007773', email: 'astroneat@gmail.com', password: 'Password', password_confirmation: 'Password')

# Hospital.create(id: 1,name: 'Northwell SIUH')
# Hospital.create(id: 2,name: 'Northwell Long Island Jewish Hospital')
# Hospital.create(id: 3,name: 'Lincoln Medical Center')

# Program.create(id: 1, name: "Northwell SIUH", address: "475 Seaview Avenue, Staten Island", website: "https://www.statenislandem.com/", specialty: "Emergency Medicine", pgy1salary: 60000, program_size: 8, program_age: 15, state: "NY", city: "Staten Island", area_type: "Urban", hospital_id: 1)
# Program.create(id: 2, name:'Lincoln Emergency Medicine', address: '234 E 149th St, Bronx, NY 10451', website: 'www.lincolnemergencymedicine.com/', specialty: 'Emergency Medicine', pgy1salary: 50000, program_size: 10, program_age:21, state: 'NY', city: 'Bronx', area_type: 'Urban', hospital_id: 3)
# Program.create(id: '22', name: "Northwell LIJ", address: "270-05 76th Ave, New Hyde Park, NY 11040", website: "https://www.northwell.edu/emergency-medicine", specialty: "Emergency Medicine", pgy1salary: 65000, program_size: 12, program_age: 20, state: "NY", city: "Manhasset", area_type: "Suburban", hospital_id: 2)

# Review.create(post: "This hospital is awesome and I love it so much. I had a great time here when I rotated here and the interview went well. I think the program director likes me a bunch. The interview was laid back.", rating: 5, program_id: 1, user_id: 2)
# Review.create(post: "I didn't rotate at this hospital, and my interview is tomorrow. I will give this one a neutral rating, because I'm not sure how I feel about it yet", rating: 3, program_id: 2, user_id: 1)
# Review.create(post: "The hospital looks great and the interview went very well. There are a few things I like about this hospital because of its location. I would recommend this to some of my juniors.", rating: 2, program_id: 1, user_id: 2)

# Ranklist.create(program_name: 'Northwell SIUH', geographic: 4, goodfit: 4, reputation: 5, personalities: 4, qol: 3, edu_training: 5, comment: 'Location is the biggest problem', user_id: 2)

puts "✅ Done seeding!"