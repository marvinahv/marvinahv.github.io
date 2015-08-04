require "bundler/setup"; Bundler.require(:default)
require 'yaml'


before 'index.html.slim' do
  @timeline = YAML.load(File.open('data/timeline.yml'))
end