/*
 *
 * this script written by aliraza azizi
 * for run this editor require 
 * [1] : twitter bootstrap
 * [2] : jquery
 * License : don't have any license
 * 
 **/
// that is only a test
files = [
    { name: 'index.php', type: 'directory', url: 'example.php' },
    { name: 'index.php', type: 'php', url: 'example.php' }
];

window.Editor = function() {
    // at first create base of a web ide
    var editorBase = this.document.createElement('section');
    editorBase.classList.add('container');
    editorBase.setAttribute('id', 'MBBEditor');

    // in next step create row for responsive
    var row = this.document.createElement('div');
    row.classList.add('row');

    // add file managar
    var fileManager = this.document.createElement('div');

    var fileManagerClasses = ['col-xs-12', 'col-md-12', 'col-sm-3', 'col-lg-3', 'fileList', 'text-center'];

    fileManagerClasses.forEach(function(classFileManager) {
        fileManager.classList.add(classFileManager);
    });

    // h3 tag for introduction a section tag
    var defineSectionFileManager = this.document.createElement('h3');
    defineSectionFileManager.innerText = 'File Manager';
    fileManager.appendChild(defineSectionFileManager);

    // difine section file manegar
    var sectionFileManager = this.document.createElement('div');
    sectionFileManager.style.width = '100%';

    // http request for get files
    //var csrfToken = window.csrf_token;
    // var files;

    files.forEach(function(file) {
        var fileName = document.createElement('a');
        fileName.setAttribute('href', 'javascript:window.EditNow(' + file.url + ')');
        fileName.innerText = file.name;
        sectionFileManager.appendChild(fileName);
        // sectionFileManager.innerHTML += ;
    });




    // append child show exist files
    fileManager.appendChild(sectionFileManager);

    // append section file manager 
    fileManager.appendChild(sectionFileManager);



    /* section for editer */


    var EditorSection = document.createElement('div');
    var EditorClasses = ['col-xs-9', 'col-sm-9', 'col-md-9', 'col-lg-9'];
    EditorClasses.forEach(function(className) {
        EditorSection.classList.add(className);
    });
    EditorSection.style.textAlign = 'left';

    // editor begin in here
    var editorInput = document.createElement('textarea');
    editorInput.setAttribute('id', 'editor');
    editorInput.classList.add('editor');
    editorInput.setAttribute('cols', '30');
    editorInput.setAttribute('row', '10');
    editorInput.style.display = 'none';

    // editor show 

    var editorShow = document.createElement('div');
    var editorShowClasses = ['editor', 'CodeMirror', 'cm-s-default'];
    editorShowClasses.forEach(function(className) {
        editorShow.classList.add(className);
    });

    // editor tools for [ save ] [ remove ]
    var tools = document.createElement('div');
    var toolsOption = [
                        'col-xs-6',
                        'col-sm-6',
                        'col-md-4',
                        'col-lg-4',
                        'col-xs-offset-3',
                        'col-sm-offset-3',
                        'col-md-offset-4',
                        'col-lg-offset-4'];
    toolsOption.forEach(function(className) {
        tools.classList.add(className);
    });

    //  save btn
    var saveBtn = document.createElement('button');
    var saveBtnClasses = ['editor-btn'];
    saveBtnClasses.forEach(function(className) {
        saveBtn.classList.add(className);
    });
    saveBtn.setAttribute('id', 'SaveEditorContent');
    saveBtn.innerText = 'ذخیره';

    // append child save btn
    tools.appendChild(saveBtn);

    // reomve btn 
    var removeBtn = document.createElement('button');
    var removeBtnClasses = ['editor-btn'];
    removeBtnClasses.forEach(function(className) {
        removeBtn.classList.add(className);
    });
    removeBtn.setAttribute('onclick', 'EditorRemove()');
    removeBtn.innerText = 'بستن';

    // append child remove btn
    tools.appendChild(removeBtn);


    // append children for EditorSection
    // appendChild editor input 
    EditorSection.appendChild(editorInput);
    // editor show
    EditorSection.appendChild(editorShow);
    //append child fileManagar
    row.appendChild(fileManager);
    // append child EditorSection
    row.appendChild(EditorSection);
    // append Child tools
    row.appendChild(tools);
    // append child row 
    editorBase.appendChild(row);
    // append child editorBase 
    document.body.appendChild(editorBase);

    var CodeEditor = CodeMirror.fromTextArea(document.getElementById('editor'), {
        lineNumbers: true,
        mode: "text/html",
        matchBrackets: true
    });

    $('#SaveEditorContent').click(function(){
        var save_editor_content = CodeEditor.getValue();
        console.log(save_editor_content);
    });

    $(".CodeMirror")[1].remove();
}

    // remove editor
window.EditorRemove = function() {
        this.document.getElementById('MBBEditor').remove();
    }
    // save Editor Text
window.SaveEditorContent = function() {
    data = $('.CodeMirror').text();
    console.log(data);
}