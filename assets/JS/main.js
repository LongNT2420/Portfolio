const light = document.querySelector('.mode-switch');
const body = document.body;
const projectSection = document.querySelector('.project-section');
const projectSectionHeader = document.querySelector('.project-section-header');
const statusNumber = document.querySelectorAll('.status-number');
const statusType = document.querySelectorAll('.status-type');
const viewBtn = document.querySelectorAll('.view-btn');
const messagesSection = document.querySelector('.messages-section');
const messagesTitle = document.querySelector('.messages-title');
const appHeader = document.querySelector('.app-header');
const headerRightBtn = document.querySelectorAll('.header-right-btn');
const appSidebarLink = document.querySelectorAll('.app-sidebar-link');
const viewList = document.querySelector('.view-list');
const viewGrid = document.querySelector('.view-grid');
const projectSectionBoxes = document.querySelector('.project-section-boxes');
const appSidebar = document.querySelector('.app-sidebar');
const messageBtn = document.querySelector('.messages-btn');


const rootStyle = document.documentElement.style;
let check = 1;
const app = ()=>{
    // light mode
    handleLightMode();
    // handle View Project Box
    handleGridView();
    handleListView();
    // handle Sildebar Active
    handleActiveSidebar();
    // handle Open Message
    handleOpenMessage();
}
// handle  Dom function
function handleLightMode(){
    light.addEventListener('click',function(){
        body.classList.toggle('dark-mode');
        // light.classList.toggle('turn-light');
        projectSection.classList.toggle('dark-mode-section');
        projectSectionHeader.classList.toggle('dark-mode-text');

        statusNumber.forEach((element)=>{
            element.classList.toggle('dark-mode-text');
        })

        statusType.forEach((element)=>{
            element.classList.toggle('dark-mode-text');
        })

        viewBtn.forEach((element)=>{
            element.classList.toggle('dark-mode-text');
        })
        messagesSection.classList.toggle("dark-mode-section");
        messagesSection.classList.toggle("dark-mode-text");
        messagesTitle.classList.toggle('dark-mode-text');

        if(check){
            rootStyle.setProperty('--message-color-hover','#243244');
            check = 0;
        }
        else {
            rootStyle.setProperty('--message-color-hover','#f3f6fd');
            check = 1;
        }
        appHeader.classList.toggle('dark-mode-text');

        headerRightBtn.forEach((btn)=>{
            btn.classList.toggle('turn-light');
        })

        appSidebarLink.forEach((link)=>{
            link.classList.toggle('dark-mode-text');
        })
    })
}

function handleGridView(){
    viewGrid.addEventListener('click',function(){
        projectSectionBoxes.classList.add('Grid-View');
        projectSectionBoxes.classList.remove('List-View');
        viewGrid.classList.add('active');
        viewList.classList.remove('active');
    })
}
function handleListView(){
    viewList.addEventListener('click',function(){
        projectSectionBoxes.classList.add('List-View');
        projectSectionBoxes.classList.remove('Grid-View');
        viewList.classList.add('active');
        viewGrid.classList.remove('active');
    })
}

function handleActiveSidebar(){
    appSidebarLink.forEach((link)=>{
    link.addEventListener('click',function(){
        var current = appSidebar.querySelector('.active');
        current.classList.remove('active');
        this.classList.add('active');
    })
    })
}

function handleOpenMessage(){
    messageBtn.addEventListener('click',function(){
        messagesSection.classList.toggle('moveMessages')
        console.log('open message');
    })
}
app();