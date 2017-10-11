require 'prawn'
require 'prawn/table'
require 'json'
require_relative 'doc_helpers.rb'

file = File.read('data.json')
data = JSON.parse(file)

section_spacing = 20

Prawn::Document.generate("cv.pdf") do

  font_families.update(
    "Alegreya" => {
      :normal => "./fonts/Alegreya-Regular.ttf"
    },

    "Roboto" => {
      :normal => "./fonts/Roboto-Regular.ttf"
    },

    "Roboto Thin" => {
      :normal => "./fonts/Roboto-Thin.ttf"
    }
  )

  # NAME
  header("Marvin Alejandro Herrera Vizuett")
  move_down section_spacing

  # WORK EXPERIENCE
  subheader("WORK")

  data['work'].each do |w|
    work_item(w)
  end


  # SKILLS
  subheader("SKILLS")

  years = []
  skills = []

  data['skills'].each do |skill|
    years << skill['period']
    skills << skill['skills']
  end

  skills_data = [years.reverse, skills.reverse]
  table skills_data,
        :column_widths => [28, 48, 38, 28, 30, 48, 58, 32, 32],
        :row_colors => ['cbcbcb', 'ffffff'],
        :cell_style => { :font => "Roboto", :size => 8 },
        :position => :center

  move_down section_spacing


  # PROJECTS
  subheader("PROJECTS")

  data['projects'].each do |p|
    project_item(p)
  end
end
