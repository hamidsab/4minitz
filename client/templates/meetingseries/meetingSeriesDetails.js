import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';

import { MeetingSeries } from '/imports/meetingseries'
import { Minutes } from '/imports/minutes'
import { UserRoles } from '/imports/userroles'
import { User, userSettings } from '/imports/users'

import { TopicListConfig } from '../topic/topicsList'
import { TabItemsConfig } from './tabItems'
import { TabTopicsConfig } from './tabTopics'


let _meetingSeriesID;   // the parent meeting object of this minutes

Template.meetingSeriesDetails.onCreated(function () {
    this.autorun(() => {
        _meetingSeriesID = FlowRouter.getParam('_id');
        this.showSettingsDialog = FlowRouter.getQueryParam('edit') === 'true';

        let usrRoles = new UserRoles();
        if (!usrRoles.hasViewRoleFor(_meetingSeriesID)) {
            FlowRouter.go('/');
        }
    });

    this.activeTabTemplate = new ReactiveVar("minutesList");
    this.activeTabId = new ReactiveVar("tab_minutes");
});

Template.meetingSeriesDetails.onRendered(function () {
    if (this.showSettingsDialog) {
        Session.set("meetingSeriesEdit.showUsersPanel", true);
        $('#dlgEditMeetingSeries').modal('show');
    }
});

Template.meetingSeriesDetails.helpers({
    meetingSeries: function() {
        return new MeetingSeries(_meetingSeriesID);
    },

    showQuickHelp: function() {
        const user = new User();
        return user.getSetting(userSettings.showQuickHelp.meetingSeries, true);
    },

    minutes: function() {
        let ms = new MeetingSeries(_meetingSeriesID);
        return ms.getAllMinutes();
    },

    isTabActive: function (tabId) {
        return (Template.instance().activeTabId.get() === tabId) ? 'active' : '';
    },

    tab: function() {
        return Template.instance().activeTabTemplate.get();
    },

    tabData: function() {
        let tmpl = Template.instance();
        let tab = tmpl.activeTabTemplate.get();
        let ms = new MeetingSeries(_meetingSeriesID);

        switch (tab) {
            case "minutesList":
                return {
                    minutes: ms.getAllMinutes(),
                    meetingSeriesId: _meetingSeriesID
                };

            case "tabTopics":
            {
                return new TabTopicsConfig(ms.topics, _meetingSeriesID);
            }

            case "tabItems":
            {
                return new TabItemsConfig(ms.topics, _meetingSeriesID);
            }

            default: throw new Meteor.Error('illegal-state', 'Unknown tab: ' + tab);
        }
    },

    isModerator: function () {
        let usrRole = new UserRoles();
        return usrRole.isModeratorOf(_meetingSeriesID);
    }
});

Template.meetingSeriesDetails.events({
    "click #btnHideHelp": function () {
        const user = new User();
        user.storeSetting(userSettings.showQuickHelp.meetingSeries, false);
    },
    "click .nav-tabs li": function(event, tmpl) {
        var currentTab = $(event.target).closest("li");

        tmpl.activeTabId.set(currentTab.attr('id'));
        tmpl.activeTabTemplate.set(currentTab.data("template"));
    }
});
