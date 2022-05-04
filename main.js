
function get_resolution_field() {
  return document
    .getElementsByClassName('components-video-resolutions controller-btn controller-btn-resolution')
    .item(0);
}

function get_quality() {
  resolution_field = get_resolution_field();

  return resolution_field
    ? resolution_field.innerHTML
    : null;
}

function set_quality(target_quality='144p') {
  resolution_field = get_resolution_field();

  if (!resolution_field) return null;

  resolution_field.click();

  quality_options = document
    .getElementsByClassName('resolution-item');

  quality_options_length = quality_options.length;

  for ( let i = 0; i < quality_options_length; i++ ) {
    quality_option = quality_options.item(i);

    if (quality_option.innerHTML == target_quality) {
      quality_option.click();

      break;
    }
  }
}

function check_quality(target_quality='144p') {
  quality = get_quality();

  if (quality != target_quality)
    set_quality(target_quality);
}

export function main() {
  setInterval(() => {
    check_quality('144p');
  }, 1000);
}
