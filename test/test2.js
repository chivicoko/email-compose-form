Dropzone.autoDiscover = false;
$(document).ready(function() {
  Dropzone.options.myDropzone = {
    url: $('#my-dropzone').attr('action'),
    paramName: "file",
    maxFiles: 5,
    maxFilesize: 20,
    uploadMultiple: true,
    thumbnailHeight: 30,
    thumbnailWidth: 30,
    init: function() {
      this.on('sending', function(file, xhr, formData) {
          formData.append('favouriteFoodText', document.getElementById('favourite-food-text').value);
        }),
        this.on("success", function(file, response) {
          console.log(response);
        })
    }
  }

  $('#my-dropzone').dropzone();
});