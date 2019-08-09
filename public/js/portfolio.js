const socket = io();

// const c = document.querySelector('#notificationTemplate').innerHTML;
// const b = document.querySelector('.form');
// const a = Mustache.render(c, {
//     error: 'e'
// });
// b.insertAdjacentHTML('beforeend', a);

// const errorNotification


// document.querySelector('.favourite__icon').addEventListener('click', (e) => {
//     e.target.children[0].setAttribute('xlink:href', 'img/sprite.svg#icon-star-full');
// });

// const $overlay = document.querySelector('.overlay');

// socket.on('loading', () => {
//     $overlay.classList.toggle('hidden');
// });

// if(localStorage.token) socket.emit('authorization', localStorage.token, (error) => alertify.error(error));
// else socket.emit('authorization');

// const $form = document.querySelector('.form');
// const $app = document.querySelector('.app');

// socket.on('start', () => {
//     $app.classList.add('none');
//     $form.classList.remove('none');

//     document.querySelectorAll('input[name=account]').forEach((input) => {
//         input.addEventListener('change', (e) => {
//             document.querySelectorAll('.start').forEach((user) => {
//                 user.classList.toggle('none');
//             });
//         });
//     });

//     const $registerForm = document.querySelector('.registerForm');
//     const $loginInForm = document.querySelector('.loginInForm');
//     // const $overlay = document.querySelector('.centered-form__box--loading');
    

//     $registerForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         socket.emit('register', {
//             username: $registerForm.children[1].value,
//             email: $registerForm.children[3].value,
//             password: $registerForm.children[5].value
//         }, (error) => {
//             if(error) alertify.error(error);
//             else alertify.success('success');
//             // $overlay.classList.toggle('hidden');
//             // if(error) $.notify(error, 'error');
//             $overlay.classList.toggle('hidden');
//         });
//     });

//     $loginInForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         socket.emit('login', {
//             email: $loginInForm.children[1].value,
//             password: $loginInForm.children[3].value
//         }, (error) => {
//             if(error) alertify.error(error);
//             $overlay.classList.toggle('hidden');
//         });
//     });
// });

// socket.on('app', ({user, token}) => {
//     // console.log(user);
//     const $body = document.querySelector('.body');
//     const $searchUsersForm = document.querySelector('.friend__search');
//     const $searchUsersInout = document.querySelector('.friend__input');
//     const $sidebarBody = document.querySelector('.sidebarBody');

//     const favouritesTemplate = document.querySelector('#favouritesTemplate').innerHTML;
//     const chatTemplate = document.querySelector('#chatTemplate').innerHTML;
//     const sidebarMainBodyTemplate = document.querySelector('#sidebarMainBodyTemplate').innerHTML;

//     const friends = user.friends;
//     let friendsArray = []
//     friends.forEach((friend) => {
//         // console.log(friend.isOnline);
        
//         const isOnline = friend.isOnline === true ? 'online' : 'offline';
//         friendsArray.push({ username: friend.username, isOnline })
//     });
    
//     $sidebarBody.innerHTML = Mustache.render(sidebarMainBodyTemplate, {friends: friendsArray});

//     const favourites = user.favourites;
//     let favouritesArray = [];
//     favourites.forEach((favourite) => {
//         const bytes = new Uint8Array(favourite.image);
//         const image = encode(bytes);
//         favouritesArray.push({ name: favourite.name, description: favourite.description, image });
//     });

//     const html =  Mustache.render(favouritesTemplate, {favourites: favouritesArray});
//     $body.insertAdjacentHTML('beforeend', html);

//     // const sidebarMainBodyTemplate = document.querySelector('#sidebarMainBodyTemplate').innerHTML;
//     // console.log(user);
//     // const friends = user.friends;  
//     // // console.log(user);
//     // let friendsArray = []
//     // friends.forEach((friend) => {
//     //     // console.log(friend.isOnline);
        
//     //     const isOnline = friend.isOnline === true ? 'online' : 'offline';
//     //     friendsArray.push({ username: friend.username, isOnline })
//     // })
//     // // console.log(friends);
//     // $sidebarBody.innerHTML = Mustache.render(sidebarMainBodyTemplate, {friendsArray});
    
//     $app.classList.remove('none');
//     $form.classList.add('none');

//     localStorage.setItem('token', token);

//     const $profile = document.querySelector('.profile');

//     $profile.addEventListener('click', async (e) => {
//         // socket.emit('logout', localStorage.token, (e) => alertify.error(e));
//         // localStorage.removeItem('token');
//         // $app.classList.add('none');
//         // $form.classList.remove('none');

//         document.querySelector('.main').classList.toggle('none');
//     });


    
//     const $createChannel = document.querySelector('.createChannel');
//     $createChannel.addEventListener('submit',(e) => {
//         e.preventDefault();
//         const name = document.querySelector('#channelName').value;
//         const description = document.querySelector('#channelDescription').value;
//         const image = document.querySelector('#channelPicture').files[0];
//         const isVisible = document.querySelector('#channelRadioVisible').checked === true ? true : false;

//         socket.emit('createChannel', { name, description, image, isVisible, user });

//         socket.on('joinChannelUser', ({ user, channel }) => {
//             socket.emit('joinChannel',  { user, name: channel.name });
//         });

//         // socket.emit('convert', image);
//         // console.log(bufferImage);
//         // socket.on('converted', ({ utf8, buffer }) => {
//         //     const image = document.querySelector('.imageClass');
//         //     var bytes = new Uint8Array(buffer);
//         //     image.src = 'data:image/png;base64,'+encode(bytes);
//         //     // image.src = 'data:image/png;base64,'+ utf8;
//         //     // const myImage = new Image(100, 200);
//         //     // myImage.src = utf8;
//         // });
//         // console.log(image)

//         // console.log(arrayBuffer);
//     });

//     $joinChannel = document.querySelector('.joinChannel');
//     $joinChannel.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const channelName = $joinChannel.children[0].value;
//         socket.emit('joinChannel',  { user, name: channelName });
//     });

//     socket.on('renderChannel', (channel) => {
//         const html = Mustache.render(chatTemplate);
//         document.querySelector('.body').innerHTML = html; 
        
//         for(let i = 15; i > 0; i--) {
//             const index = channel.messages.length - i;
//             if(index <= -1) continue;
            
//             if(channel.messages[index].username === user.username) {
//                 const $messages = document.querySelector('#messages');

//                 const myMessageTemplate = document.querySelector('#myMessageTemplate').innerHTML;
        
//                 const html = Mustache.render(myMessageTemplate, {
//                     username: channel.messages[index].username,
//                     createdAt: moment(channel.messages[index].date).format('h:mm a'),
//                     message:  channel.messages[index].message
//                 });
//                 $messages.insertAdjacentHTML('beforeend', html);
//                 autoscroll();
//             }else {
//                 const $messages = document.querySelector('#messages');

//                 const messageTemplate = document.querySelector('#messageTemplate').innerHTML;
        
//                 const html = Mustache.render(messageTemplate, {
//                     username: channel.messages[index].username,
//                     createdAt: moment(channel.messages[index].date).format('h:mm a'),
//                     message:  channel.messages[index].message
//                 });
//                 $messages.insertAdjacentHTML('beforeend', html);
//                 autoscroll();
//             }
//         }

//         const $messageForm = document.querySelector('#messageForm');

//         $messageForm.addEventListener('submit', (e) => {
//             e.preventDefault();
    
//             $messageInput = document.querySelector('#messageInput');
//             const value = $messageInput.value;
    
//             socket.emit('sendMessage', { user, message: value, name: channel.name });
//         }); 
//     });

//     // $messageForm.addEventListener('submit', (e) => {
//     //     e.preventDefault();

//     //     $messageInput = document.querySelector('#messageInput');
//     //     const value = $messageInput.value;

//     //     socket.emit('sendMessage', { user, message: value, name: channel.name });
//     // }); 

//     socket.on('renderMessage', ({ channel }) => {
//         const $messages = document.querySelector('#messages');

//         const messageTemplate = document.querySelector('#messageTemplate').innerHTML;

//         const messageIndex = channel.messages.length - 1;

//         const html = Mustache.render(messageTemplate, {
//             username: channel.messages[messageIndex].username,
//             createdAt: moment(channel.messages[messageIndex].date).format('h:mm a'),
//             message:  channel.messages[messageIndex].message
//         });
//         $messages.insertAdjacentHTML('beforeend', html);
//         autoscroll();
//     });

//     socket.on('renderMyMessage', ({ channel }) => {
//         const $messages = document.querySelector('#messages');

//         const myMessageTemplate = document.querySelector('#myMessageTemplate').innerHTML;

//         const messageIndex = channel.messages.length - 1;

//         const html = Mustache.render(myMessageTemplate, {
//             username: channel.messages[messageIndex].username,
//             createdAt: moment(channel.messages[messageIndex].date).format('h:mm a'),
//             message:  channel.messages[messageIndex].message
//         });
//         $messages.insertAdjacentHTML('beforeend', html);
//         autoscroll();
//     });

//     const $searchForm = document.querySelector('.searchForm');
//     $searchForm.addEventListener('submit', (e) => {
//         e.preventDefault();

//         const searchValue = $searchForm.children[0].value;
//         socket.emit('findChannels', searchValue);
//     });

//     socket.on('renderChannels', ({ channels }) => {
//         const searchResultsTemplate = document.querySelector('#searchResultsTemplate').innerHTML;
        
//         channels.forEach((channel) => {
//             // console.log(channel.image);
//             // console.log(channel)
//             const bytes = new Uint8Array(channel.image.data);
//             // console.log(channel.image);
//             // console.log(bytes);
//             const encoded = encode(bytes);
//             // console.log(encoded);
//             channel.avatar = encoded;
//             // console.log(encoded);
//         });
//         const html = Mustache.render(searchResultsTemplate, {channels});
//         $body.innerHTML = html;

//         $searchStar = document.querySelectorAll('.search__star');
//         $searchStar.forEach((star) => {
//             star.addEventListener('click', (e) => {
//                 const name = star.parentElement.children[1].innerHTML;
//                 socket.emit('addFavourites', { user_id: user._id, channelName: name });
//             });
//         });

//         $searchItems = document.querySelectorAll('.search__item');
//         $searchItems.forEach((searchItem) => {
//             searchItem.addEventListener('click', (e) => {
//                 const channelName = searchItem.children[1].innerHTML;
//                 socket.emit('joinChannel',  { user, name: channelName });
//             });
//         });
//     });

//     $searchUsersForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const value = $searchUsersInout.value;
//         socket.emit('findUsers', ({ user, searchValue: value}));
//     });

//     socket.on('renderUsers', ({ users }) => {
//         const searchUsersTemplate = document.querySelector('#searchUsersTemplate').innerHTML;
//         users.forEach((user) => {
//             const bytes = new Uint8Array(user.avatar);
//             const encoded = encode(bytes);
//             user.avatar = encoded;   
//         });
//         const html = Mustache.render(searchUsersTemplate, {users});
//         $sidebarBody.innerHTML = html;

//         const $userElements = document.querySelectorAll('.user');

//         $userElements.forEach((userEl, i) => {
//             userEl.addEventListener('click', (e) => {
//                 const userName = document.querySelectorAll('.user__name')[i].innerHTML;
//                 socket.emit('addRemoveFriend', { user, userName });
//             });
//         });

//         const $exitButton = document.querySelector('.user__exit');
//         // console.log(user.friends);
//         $exitButton.addEventListener('click', (e) => {
//             const sidebarMainBodyTemplate = document.querySelector('#sidebarMainBodyTemplate').innerHTML;
//             const friends = user.friends;
//             let friendsArray = []
//             friends.forEach((friend) => {
//             // console.log(friend.isOnline);
            
//             const isOnline = friend.isOnline === true ? 'online' : 'offline';
//             friendsArray.push({ username: friend.username, isOnline })
//         });
//             // console.log(friendsArray);
//             const html = Mustache.render(sidebarMainBodyTemplate, {friends: friendsArray});
//             $sidebarBody.innerHTML = html;
//         });
//     });

//     // console.log($userElement);
//     socket.on('addRemoveFriendData', ({data, friendsName}) => {
//         // console.log(data);
//         user = data;

//         // const sidebar = document.querySelector('.sidebarBody');
//         // const html = Mustache.render(sidebarMainBodyTemplate);
//         // sidebar.innerHTML = html;

//         // console.log(friendsName, user.friends[user.friends.length - 1]);
//         if(user.friends.length - 1 <= -1) alertify.warning('User was deleted');
//         else if(user.friends[user.friends.length - 1].username === friendsName) alertify.warning('User was added');
//         else if (user.friends[user.friends.length - 1].username !== friendsName) alertify.warning('User was deleted');
//     });

//     socket.on('updateUser', ({user_id, friend, i}) => {
//         const sidebarMainBodyTemplate = document.querySelector('#sidebarMainBodyTemplate').innerHTML;
//         // console.log(user_id, friend, i, user_id === user._id)
//         // console.log(user_id === user._id);
//         // console.log(user);
//         if(user_id === user._id) user.friends[i] = friend;   
//         // console.log(user)  ;
//         socket.emit('updateUserData', ({data: user}));

//         const friends = user.friends;
//         let friendsArray = []
//         friends.forEach((friend) => {
//             // console.log(friend.isOnline);
            
//             const isOnline = friend.isOnline === true ? 'online' : 'offline';
//             friendsArray.push({ username: friend.username, isOnline })
//         });

//         const html = Mustache.render(sidebarMainBodyTemplate, {friends: friendsArray});
//         $sidebarBody.innerHTML = html;
//     });

//     socket.on('renerFavourites', ({ userData }) => {
//         console.log(user, userData);
//         user = userData;
//         // console.log(userData.friends);
//     });
    

//     socket.on('console.log', (data) => console.log(data));
// });


// socket.on('error', error => alertify.error(error));

// const autoscroll = () => {
//     const $messages = document.querySelector('#messages');
//     // New message element
//     const $newMessage = $messages.lastElementChild;

//     // Height of last message
//     const newMessageStyles = getComputedStyle($newMessage);
//     const newMessageMargin = parseInt(newMessageStyles.marginBottom);
//     const newMessageHeight = $newMessage.offsetHeight + newMessageMargin;

//     // Vissible height
//     const visibleHeight = $messages.offsetHeight;

//     // Height of messages container
//     const containerHeight = $messages.scrollHeight;

//     // How far were I scrolled ?
//     const scrollOffset = $messages.scrollTop + visibleHeight;

//     if(containerHeight - newMessageHeight <= scrollOffset) {
//         $messages.scrollTop = $messages.scrollHeight;
//     }
// }

// function encode (input) {
//     var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
//     var output = "";
//     var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
//     var i = 0;

//     while (i < input.length) {
//         chr1 = input[i++];
//         chr2 = i < input.length ? input[i++] : Number.NaN; // Not sure if the index 
//         chr3 = i < input.length ? input[i++] : Number.NaN; // checks are needed here

//         enc1 = chr1 >> 2;
//         enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
//         enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
//         enc4 = chr3 & 63;

//         if (isNaN(chr2)) {
//             enc3 = enc4 = 64;
//         } else if (isNaN(chr3)) {
//             enc4 = 64;
//         }
//         output += keyStr.charAt(enc1) + keyStr.charAt(enc2) +
//                   keyStr.charAt(enc3) + keyStr.charAt(enc4);
//     }
//     return output;
// }

// document.querySelector('.fileUP').addEventListener('input', (e) => {
//     socket.emit('video', e.target.files[0]);
// });

// socket.on('videoOUT', (project) => {
//     const bytes = new Uint8Array(project.video.data);
//     const encoded = encode(bytes);
//     // <img src="data:image/png;base64, ${encoded}">
//     document.querySelector('body').insertAdjacentHTML('beforebegin', `
//     <video src="data:video/mp4;base64, ${encoded}" width="100%" height="100%" autoplay controls>
//     <source src="data:video/mp4;base64, ${encoded}" type="video/mp4">
//   Your browser does not support the video tag.
//   </video>
//     `)
// });
socket.emit('serverPortfolio', 'df');
socket.on('start', (site) => {
            console.log(site);
                const infoTemplate = document.querySelector('#infoTemplate').innerHTML;
                const bytes = new Uint8Array(site.site.photo.image.data);
                const encoded = encode(bytes);
                site.site.photo = encoded;

                const html = Mustache.render(infoTemplate, site.site);
                
                document.querySelector('.portfolio').insertAdjacentHTML('afterbegin', html);

                document.querySelectorAll('.portfolio__portfolio-plus').forEach((plus) => {
                const height = plus.parentNode.offsetHeight;
                plus.parentElement.parentElement.style.height = `${height}px`;
                plus.addEventListener('click', () => {
                plus.parentElement.parentElement.classList.toggle('active');
                for(let i = 0; i < plus.children.length; i++) {
                    if (plus.children[i].classList.contains('portfolio__portfolio-line--2')) {
                        plus.children[i].classList.toggle('rotation');
                    }
                }
        });

        
    });

    socket.on('projects', (projects) => {
        console.log(projects);
        const portfolioTemplate = document.querySelector('#portfolioTemplate').innerHTML;
        projects.forEach((project) => {
            let media = [];
            project.media.forEach((med) => {
                
                const bytes = new Uint8Array(med.data.data);
                const encoded = encode(bytes);
                console.log(med, encoded);
                if(med.type === 'video') media.push(`<video src="data:video/mp4;base64, ${encoded}" width="100%" height="100%" style="object-fit: cover;" autoplay controls></video>`);
                else if(med.type === 'image') media.push(`<img src="data:image/png;base64, ${encoded}" style="width: 100%; height: 100%; objct-fit: cover;">`);
                console.log(media);
            });
            // new Swiper (`${project._id.toString()}`, {});
            const html = Mustache.render(portfolioTemplate, {title: project.title, info: project.info, media, id: project._id  });
            document.querySelector('.portfolio__portfolio').insertAdjacentHTML('beforeend', html);
        });
        var mySwiper = new Swiper ('.swiper-container', {
            navigation: {
                nextEl: '.portfolio__portfolio-button--right',
                prevEl: '.portfolio__portfolio-button--left',
              }
        });

        document.querySelectorAll('.portfolio__portfolio-plus').forEach((plus) => {
            const height = plus.parentNode.offsetHeight;
            plus.parentElement.parentElement.style.height = `${height}px`;
            plus.addEventListener('click', () => {
            plus.parentElement.parentElement.classList.toggle('active');
            for(let i = 0; i < plus.children.length; i++) {
                if (plus.children[i].classList.contains('portfolio__portfolio-line--2')) {
                    plus.children[i].classList.toggle('rotation');
                }
            }
    });

    
});

        const bar = document.querySelector('.portfolio__portfolio-progress-bar').offsetWidth;
        document.querySelectorAll('.portfolio__portfolio-buttons').forEach((button) => {
            const children = button.parentElement.firstElementChild.firstElementChild.firstElementChild.childElementCount;
            const elemLength = bar / children;


            // console.log(button.firstElementChild.nextElementSibling, children);
            button.firstElementChild.nextElementSibling.firstElementChild.style.width = `${elemLength}px`;

            button.firstElementChild.addEventListener('click', (e) => {
                const slider = button.parentElement.firstElementChild.firstElementChild.firstElementChild.children;
                for(let key in slider) {
                    if(slider[key].classList.contains('swiper-slide-active')) {
                        button.firstElementChild.nextElementSibling.firstElementChild.style.marginLeft = `${key * elemLength}px`;
                    }
                }
                // button.parentElement.firstElementChild.firstElementChild.firstElementChild.children.forEach((child) => {
                //     console.log(child);
                // });
            });

            button.lastElementChild.addEventListener('click', (e) => {
                const slider = button.parentElement.firstElementChild.firstElementChild.firstElementChild.children;
                for(let key in slider) {
                    if(slider[key].classList.contains('swiper-slide-active')) {
                        button.firstElementChild.nextElementSibling.firstElementChild.style.marginLeft = `${key * elemLength}px`;
                    }
                }
                // button.parentElement.firstElementChild.firstElementChild.firstElementChild.children.forEach((child) => {
                //     console.log(child);
                // });
            });
        
            // document.querySelectorAll('.portfolio__portfolio-button').forEach(button => {
            //     button.addEventListener('click', () => {
            //         setTimeout(() => {
            //             document.querySelectorAll('.portfolio__portfolio-image.swiper-slide').forEach((slide, i) => {
            //                 if(slide.classList.contains('swiper-slide-active')) {
            //                     document.querySelector('.portfolio__portfolio-progress-bar-elem').style.marginLeft = `${i * elemLength}px`;
            //                 }
            //             });
            //         }, 1);
            //     });
            // });
        });        
    });
});

// channels.forEach((channel) => {
//     // console.log(channel.image);
//     // console.log(channel)
//     const bytes = new Uint8Array(channel.image.data);
//     // console.log(channel.image);
//     // console.log(bytes);
//     const encoded = encode(bytes);
//     // console.log(encoded);
//     channel.avatar = encoded;
//     // console.log(encoded);
// });

function encode (input) {
var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var output = "";
var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
var i = 0;

while (i < input.length) {
    chr1 = input[i++];
    chr2 = i < input.length ? input[i++] : Number.NaN; // Not sure if the index 
    chr3 = i < input.length ? input[i++] : Number.NaN; // checks are needed here

    enc1 = chr1 >> 2;
    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
    enc4 = chr3 & 63;

    if (isNaN(chr2)) {
        enc3 = enc4 = 64;
    } else if (isNaN(chr3)) {
        enc4 = 64;
    }
    output += keyStr.charAt(enc1) + keyStr.charAt(enc2) +
              keyStr.charAt(enc3) + keyStr.charAt(enc4);
}
return output;
}


// function collapseSection(element, height) {
//     // get the height of the element's inner content, regardless of its actual size
//     var sectionHeight = element.scrollHeight;
    
//     // temporarily disable all css transitions
//     var elementTransition = element.style.transition;
//     element.style.transition = '';
    
//     // on the next frame (as soon as the previous style change has taken effect),
//     // explicitly set the element's height to its current pixel height, so we 
//     // aren't transitioning out of 'auto'
//     requestAnimationFrame(function() {
//       element.style.height = sectionHeight + 'px';
//       element.style.transition = elementTransition;
      
//       // on the next frame (as soon as the previous style change has taken effect),
//       // have the element transition to height: 0
//       requestAnimationFrame(function() {
//         // element.style.height = height + 'px';
//         element.style.height = null;
//       });
//     });
    
//     // mark the section as "currently collapsed"
//     element.setAttribute('data-collapsed', 'true');
//   }
  
//   function expandSection(element, height) {
//     // get the height of the element's inner content, regardless of its actual size
//     var sectionHeight = element.scrollHeight;
    
//     // have the element transition to the height of its inner content
//     element.style.height = sectionHeight + 'px';
  
//     // when the next css transition finishes (which should be the one we just triggered)
//     element.addEventListener('transitionend', function(e) {
//       // remove this event listener so it only gets triggered once
//       element.removeEventListener('transitionend', arguments.callee);
      
//       // remove "height" from the element's inline styles, so it can return to its initial value
//       element.style.height = height + 'px';
//     });
    
//     // mark the section as "currently not collapsed"
//     element.setAttribute('data-collapsed', 'false');
//   }

// //   const $createChannel = document.querySelector('.createChannel');
//   //     $createChannel.addEventListener('submit',(e) => {
//   //         e.preventDefault();
//   //         const name = document.querySelector('#channelName').value;
//   //         const description = document.querySelector('#channelDescription').value;
//   //         const image = document.querySelector('#channelPicture').files[0];
//   //         const isVisible = document.querySelector('#channelRadioVisible').checked === true ? true : false;
  
//   //         socket.emit('createChannel', { name, description, image, isVisible, user });
  
//   //         socket.on('joinChannelUser', ({ user, channel }) => {
//   //             socket.emit('joinChannel',  { user, name: channel.name });
//   //         });
  
//   //         // socket.emit('convert', image);
//   //         // console.log(bufferImage);
//   //         // socket.on('converted', ({ utf8, buffer }) => {
//   //         //     const image = document.querySelector('.imageClass');
//   //         //     var bytes = new Uint8Array(buffer);
//   //         //     image.src = 'data:image/png;base64,'+encode(bytes);
//   //         //     // image.src = 'data:image/png;base64,'+ utf8;
//   //         //     // const myImage = new Image(100, 200);
//   //         //     // myImage.src = utf8;
//   //         // });
//   //         // console.log(image)
  
//   //         // console.log(arrayBuffer);
//   //     });