# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Project.create(:name => "Faculty Profiles", :client => "Auburn University Office of Institutional Research", :quote => "Thanks for your great work, Clay.", :description => "", :offset_x => 50, :offset_y => 50)
Project.create(:name => "Educational Resources", :client => "Alabama State Department of Education", :quote => "We are very pleased with Clay's work on the website, he's doing great things for us!", :description => "", :offset_x => 40, :offset_y => 42)
Project.create(:name => "Classroom Administration", :client => "Auburn University", :quote => "We are impressed with what we've seen.", :description => "", :offset_x => 50, :offset_y => 64)
Project.create(:name => "News Release", :client => "Auburn University Office of Information Technology", :quote => "Other departments will want to use this!", :description => "", :offset_x => 47, :offset_y => 23)
Project.create(:name => "Employee Directory", :client => "Auburn University Office of Information Technology", :quote => "The site is so much easier to use now!", :description => "", :offset_x => 16, :offset_y => 54)
Project.create(:name => "Smockle", :client => "Smockle, LLC.", :quote => "Wow.", :description => "", :offset_x => 50, :offset_y => 50)