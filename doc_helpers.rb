def header(text)
  formatted_text [
    {
      :text => text.upcase,
      :font => "Alegreya",
      :size => 16
    }
  ], :align => :center
end


def subheader(given_text)
  bounding_box([400, cursor], :width => 100) do
    formatted_text [
      {
        :text => given_text,
        :font => "Roboto Thin",
        :size => 14
      }
    ], :align => :right
  end

  move_down 15
end


def work_item(item)
  y = cursor
  period_width = 100
  period_left_margin = 50

  # Period
  bounding_box([period_left_margin, y], :width => period_width) do
    formatted_text [
      {
        :text => item['period'].upcase,
        :font => "Roboto Thin",
        :size => 8
      }
    ], :align => :right
  end

  # Work Info
  period_info_pad = 50
  info_x = period_left_margin + period_width + period_info_pad
  info_width = 250

  bounding_box([info_x, y], :width => info_width) do
    formatted_text [
      {
        :text => item['title'],
        :font => "Roboto",
        :size => 12
      }
    ]

    formatted_text [
      {
        :text => item['company'].upcase,
        :font => "Roboto Thin",
        :size => 7
      }
    ]

    move_down 5

    formatted_text [
      {
        :text => item['desc'],
        :font => "Roboto",
        :size => 8
      }
    ]

    move_down 12
  end
end


def project_item(item)
  y = cursor
  x = 50

  bounding_box([x, y], :width => 400) do
    formatted_text [
      {
        :text => item['title'],
        :font => "Roboto",
        :size => 12
      }
    ]

    move_down 5

    formatted_text [
      {
        :text => item['desc'],
        :font => "Roboto",
        :size => 8
      }
    ]

    move_down 12
  end
end
