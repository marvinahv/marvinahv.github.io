require "bundler/setup"; Bundler.require(:default)
require 'yaml'


before 'index.html.slim' do
  @experience = YAML.load(File.open('data/experience.yml'))
  @skills = YAML.load(File.open('data/skills.yml'))
  @portfolio = YAML.load(File.open('data/portfolio.yml'))
  @recommendations = YAML.load(File.open('data/recommendations.yml'))
end