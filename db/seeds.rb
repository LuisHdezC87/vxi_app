# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts 'cleaning tables ........'
VxiSite.delete_all
JobPosition.delete_all
EducationLevel.delete_all
JobExperience.delete_all

puts 'adding Vxi Sites .......'
VxiSite.create(site_name: 'North EDSA, Quezon City')
VxiSite.create(site_name: 'EDSA Buendia, Makati City')
VxiSite.create(site_name: 'MOA Complex, Pasay City')
VxiSite.create(site_name: 'Robinsons Cybergate, Davao City')
VxiSite.create(site_name: 'SM Ecoland, Davao City')
VxiSite.create(site_name: 'Felcris Centrale, Davao City')
VxiSite.create(site_name: 'Sm City Clark, Angeles City')
puts 'Vxi Sites added .......'

puts 'Adding Positions .......'
JobPosition.create(position_name: 'Sales Associate')
JobPosition.create(position_name: 'Tech Support Associate')
JobPosition.create(position_name: 'Customer Service Associate')
puts 'Positions added .......'

puts 'Adding Educational levels .......'
EducationLevel.create(name: 'High school graduate')
EducationLevel.create(name: 'K-12 Graduate')
EducationLevel.create(name: 'College graduate')
EducationLevel.create(name: 'Undergrad below 2 years')
EducationLevel.create(name: 'Undergrad 2 years and up')
EducationLevel.create(name: 'Post Graduate')
puts 'Educational levels added .......'

puts 'Adding Job experience options .......'
JobExperience.create(position: 'call center', experience: 'None')
JobExperience.create(position: 'call center', experience: 'Yes, 1-5 months')
JobExperience.create(position: 'call center', experience: 'Yes, 6-11 months')
JobExperience.create(position: 'call center', experience: 'Yes, 12-23 months')
JobExperience.create(position: 'call center', experience: 'Yes, 24 months and above')
puts 'Job experience options added .......'
