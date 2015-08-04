require "bundler/setup"; Bundler.require(:default)
require 'yaml'


before 'index.html.slim' do
  @experience = YAML.load(File.open('data/experience.yml'))
  @skills = YAML.load(File.open('data/skills.yml'))
end