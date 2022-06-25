ngMeetTheTeam
======
**ngMeetTheTeam** is a seemingly simple code test riddled with custom elements, subtle auto layout requirements, and commonly overlooked UX considerations.

Originally an Objective-C project, it was converted to Angular as a straight forward yet complex coding example. The goal was to recreate the “Meet the Team” iOS application based on the (slightly modified) screenshots below. The app should allow the user to browse and learn about the team by scrolling through a list, and tapping anyone to learn more.

#### Screenshots
<img src="https://64.media.tumblr.com/2925194a7fd8615bf4ae1f544b7d0583/1553609648a630eb-6f/s1280x1920/ba4e12286edce27ffbac999017f89a3f13c92fcd.png" width="280"/>    <img src="https://64.media.tumblr.com/26514f5fc9894b976ef228d5fd19ac57/1553609648a630eb-7f/s1280x1920/e3c99247445ac00cadf04179fd25883e4a46c98f.png" width="280"/>    <img src="https://64.media.tumblr.com/61473f223937604e40447fd9915c71ed/1553609648a630eb-67/s1280x1920/8f67b5ff543317eac133d06c026f4a81214d8692.png" width="280"/>

## Custom Elements
#### Team View
* Table View Cell - Custom font, color, image treatment, and disclosure arrow.
* Lato - A commonly used Google Font which doesn’t come with the iPhone by default.
* Text - Kerned.

#### Profile View
* View styling - Code driven design made from two bezier paths which resizes fluidly without degradation.
* Text - Justified and kerned.

## Auto Layout Requirements
#### Team View
* Custom disclosure arrow placement.

#### Profile View
* Profile Image - Scales to fill the available space in the header when scrolling down but locks to the top of the screen when scrolling up and slides under the lower half.
* Profile View - Dynamically sizes it’s height based on the contents/height of the ‘bio’ Text View.

## UX Improvements
#### Team View
* URL based images - A do-try-catch based function is used to request all images asynchronously without blocking the UI.

#### Profile View
* UILabel clipping - Labels padded and offset to contain custom font descenders.
* Profile Image - Scales to fill the available space in the header when scrolling down but slides under the lower half of the view when scrolling up.
