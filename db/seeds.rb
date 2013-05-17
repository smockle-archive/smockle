# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Project.create(:name => "Faculty Profiles", :client => "Auburn University - Office of Institutional Research", :quote => "Thanks for your great work, Clay.", :description => "", :offset_x => 50, :offset_y => 50, :link => "https://cws.auburn.edu/oit/fai")
Project.create(:name => "Educational Resources", :client => "Alabama State Department of Education", :quote => "We are very pleased with Clay's work on the website, he's doing great things for us!", :description => "I built an accessible, responsive website for the Alabama Science in Motion program using the ASP.NET MVC Framework. The site was in developement for eight months. Today the site connects hundreds of students and educators across the state. Now it's easy to view lab materials and photos, learn about education standards, and contact a regional science specialist.", :offset_x => 40, :offset_y => 42, :link => "https://cws.auburn.edu/asim")
Project.create(:name => "Classroom Administration", :client => "Auburn University - Office of Information Technology", :quote => "We are impressed with what we've seen.", :description => "", :offset_x => 50, :offset_y => 64, :link => "https://cws.auburn.edu/oit/tec")
Project.create(:name => "News Release", :client => "Auburn University - Office of Information Technology", :quote => "Other departments will want to use this!", :description => "", :offset_x => 47, :offset_y => 23, :link => "https://cws.auburn.edu/oit/news")
Project.create(:name => "Employee Directory", :client => "Auburn University - Office of Information Technology", :quote => "The site is so much easier to use now!", :description => "", :offset_x => 16, :offset_y => 54, :link => "https://cws.auburn.edu/oit/phone")
Project.create(:name => "Smockle", :client => "Smockle, LLC.", :quote => "Wow.", :description => "", :offset_x => 50, :offset_y => 50, :link => "http://www.smockle.com/")