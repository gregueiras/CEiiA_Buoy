from django.conf.urls import url
from django.contrib.auth.decorators import login_required
from django.views import generic
from django.utils.translation import ugettext_lazy as _


from oscar.core.application import Application
from oscar.core.loading import get_class


class CustomerApplication(Application):
    name = 'customer'
    summary_view = get_class('customer.views', 'AccountSummaryView')
    order_history_view = get_class('customer.views', 'OrderHistoryView')
    order_detail_view = get_class('customer.views', 'OrderDetailView')
    anon_order_detail_view = get_class('customer.views',
                                       'AnonymousOrderDetailView')
    order_line_view = get_class('customer.views', 'OrderLineView')

    address_list_view = get_class('customer.views', 'AddressListView')
    address_create_view = get_class('customer.views', 'AddressCreateView')
    address_update_view = get_class('customer.views', 'AddressUpdateView')
    address_delete_view = get_class('customer.views', 'AddressDeleteView')
    address_change_status_view = get_class('customer.views',
                                           'AddressChangeStatusView')

    email_list_view = get_class('customer.views', 'EmailHistoryView')
    email_detail_view = get_class('customer.views', 'EmailDetailView')
    login_view = get_class('customer.views', 'AccountAuthView')
    logout_view = get_class('customer.views', 'LogoutView')
    register_view = get_class('customer.views', 'AccountRegistrationView')
    profile_view = get_class('customer.views', 'ProfileView')
    profile_update_view = get_class('customer.views', 'ProfileUpdateView')
    profile_delete_view = get_class('customer.views', 'ProfileDeleteView')
    change_password_view = get_class('customer.views', 'ChangePasswordView')

    notification_inbox_view = get_class('customer.notifications.views',
                                        'InboxView')
    notification_archive_view = get_class('customer.notifications.views',
                                          'ArchiveView')
    notification_update_view = get_class('customer.notifications.views',
                                         'UpdateView')
    notification_detail_view = get_class('customer.notifications.views',
                                         'DetailView')

    alert_list_view = get_class('customer.alerts.views',
                                'ProductAlertListView')
    alert_create_view = get_class('customer.alerts.views',
                                  'ProductAlertCreateView')
    alert_confirm_view = get_class('customer.alerts.views',
                                   'ProductAlertConfirmView')
    alert_cancel_view = get_class('customer.alerts.views',
                                  'ProductAlertCancelView')

    wishlists_add_product_view = get_class('customer.wishlists.views',
                                           'WishListAddProduct')
    wishlists_list_view = get_class('customer.wishlists.views',
                                    'WishListListView')
    wishlists_detail_view = get_class('customer.wishlists.views',
                                      'WishListDetailView')
    wishlists_create_view = get_class('customer.wishlists.views',
                                      'WishListCreateView')
    wishlists_create_with_product_view = get_class('customer.wishlists.views',
                                                   'WishListCreateView')
    wishlists_update_view = get_class('customer.wishlists.views',
                                      'WishListUpdateView')
    wishlists_delete_view = get_class('customer.wishlists.views',
                                      'WishListDeleteView')
    wishlists_remove_product_view = get_class('customer.wishlists.views',
                                              'WishListRemoveProduct')
    wishlists_move_product_to_another_view = get_class(
        'customer.wishlists.views', 'WishListMoveProductToAnotherWishList')
    user_posts_list = get_class('forum_member.views', 'UserPostsView')
    forum_profile_detail_view = get_class('machina.apps.forum_member.views', 'ForumProfileDetailView')
    forum_profile_update_view = get_class('machina.apps.forum_member.views', 'ForumProfileUpdateView')
    topic_subscribe_view = get_class('machina.apps.forum_member.views', 'TopicSubscribeView')
    topic_unsubscribe_view = get_class('machina.apps.forum_member.views', 'TopicUnsubscribeView')
    topic_subscription_list_view = get_class('machina.apps.forum_member.views', 'TopicSubscribtionListView')

    topic_lock_view = get_class('machina.apps.forum_moderation.views', 'TopicLockView')
    topic_unlock_view = get_class('machina.apps.forum_moderation.views', 'TopicUnlockView')
    topic_delete_view = get_class('machina.apps.forum_moderation.views', 'TopicDeleteView')
    topic_move_view = get_class('machina.apps.forum_moderation.views', 'TopicMoveView')
    topic_update_to_normal_topic_view = get_class(
        'machina.apps.forum_moderation.views', 'TopicUpdateToNormalTopicView')
    topic_update_to_sticky_topic_view = get_class(
        'machina.apps.forum_moderation.views', 'TopicUpdateToStickyTopicView')
    topic_update_to_announce_view = get_class('machina.apps.forum_moderation.views', 'TopicUpdateToAnnounceView')
    moderation_queue_list_view = get_class('machina.apps.forum_moderation.views', 'ModerationQueueListView')
    moderation_queue_detail_view = get_class('machina.apps.forum_moderation.views', 'ModerationQueueDetailView')
    post_approve_view = get_class('machina.apps.forum_moderation.views', 'PostApproveView')
    post_disapprove_view = get_class('machina.apps.forum_moderation.views', 'PostDisapproveView')

    def get_urls(self):
        urls = [
            # Login, logout and register doesn't require login
            url(r'^login/$', self.login_view.as_view(), name='login'),
            url(r'^logout/$', self.logout_view.as_view(), name='logout'),
            url(r'^register/$', self.register_view.as_view(), name='register'),
            url(r'^$', login_required(self.summary_view.as_view()),
                name='summary'),
            url(r'^change-password/$',
                login_required(self.change_password_view.as_view()),
                name='change-password'),

            # Profile
            url(r'^profile/$',
                login_required(self.profile_view.as_view()),
                name='profile-view'),
            url(r'^profile/edit/$',
                login_required(self.profile_update_view.as_view()),
                name='profile-update'),
            url(r'^profile/delete/$',
                login_required(self.profile_delete_view.as_view()),
                name='profile-delete'),

            # Order history
            url(r'^orders/$',
                login_required(self.order_history_view.as_view()),
                name='order-list'),
            url(r'^order-status/(?P<order_number>[\w-]*)/(?P<hash>[A-z0-9-_=:]+)/$',
                self.anon_order_detail_view.as_view(), name='anon-order'),
            url(r'^orders/(?P<order_number>[\w-]*)/$',
                login_required(self.order_detail_view.as_view()),
                name='order'),
            url(r'^orders/(?P<order_number>[\w-]*)/(?P<line_id>\d+)$',
                login_required(self.order_line_view.as_view()),
                name='order-line'),

            # Address book
            url(r'^addresses/$',
                login_required(self.address_list_view.as_view()),
                name='address-list'),
            url(r'^addresses/add/$',
                login_required(self.address_create_view.as_view()),
                name='address-create'),
            url(r'^addresses/(?P<pk>\d+)/$',
                login_required(self.address_update_view.as_view()),
                name='address-detail'),
            url(r'^addresses/(?P<pk>\d+)/delete/$',
                login_required(self.address_delete_view.as_view()),
                name='address-delete'),
            url(r'^addresses/(?P<pk>\d+)/'
                r'(?P<action>default_for_(billing|shipping))/$',
                login_required(self.address_change_status_view.as_view()),
                name='address-change-status'),

            # Email history
            url(r'^emails/$',
                login_required(self.email_list_view.as_view()),
                name='email-list'),
            url(r'^emails/(?P<email_id>\d+)/$',
                login_required(self.email_detail_view.as_view()),
                name='email-detail'),

            # Notifications
            # Redirect to notification inbox
            url(r'^notifications/$', generic.RedirectView.as_view(
                url='/accounts/notifications/inbox/', permanent=False)),
            url(r'^notifications/inbox/$',
                login_required(self.notification_inbox_view.as_view()),
                name='notifications-inbox'),
            url(r'^notifications/archive/$',
                login_required(self.notification_archive_view.as_view()),
                name='notifications-archive'),
            url(r'^notifications/update/$',
                login_required(self.notification_update_view.as_view()),
                name='notifications-update'),
            url(r'^notifications/(?P<pk>\d+)/$',
                login_required(self.notification_detail_view.as_view()),
                name='notifications-detail'),

            # Alerts
            # Alerts can be setup by anonymous users: some views do not
            # require login
            url(r'^alerts/$',
                login_required(self.alert_list_view.as_view()),
                name='alerts-list'),
            url(r'^alerts/create/(?P<pk>\d+)/$',
                self.alert_create_view.as_view(),
                name='alert-create'),
            url(r'^alerts/confirm/(?P<key>[a-z0-9]+)/$',
                self.alert_confirm_view.as_view(),
                name='alerts-confirm'),
            url(r'^alerts/cancel/key/(?P<key>[a-z0-9]+)/$',
                self.alert_cancel_view.as_view(),
                name='alerts-cancel-by-key'),
            url(r'^alerts/cancel/(?P<pk>[a-z0-9]+)/$',
                login_required(self.alert_cancel_view.as_view()),
                name='alerts-cancel-by-pk'),

            # Wishlists
            url(r'wishlists/$',
                login_required(self.wishlists_list_view.as_view()),
                name='wishlists-list'),
            url(r'wishlists/add/(?P<product_pk>\d+)/$',
                login_required(self.wishlists_add_product_view.as_view()),
                name='wishlists-add-product'),
            url(r'wishlists/(?P<key>[a-z0-9]+)/add/(?P<product_pk>\d+)/',
                login_required(self.wishlists_add_product_view.as_view()),
                name='wishlists-add-product'),
            url(r'wishlists/create/$',
                login_required(self.wishlists_create_view.as_view()),
                name='wishlists-create'),
            url(r'wishlists/create/with-product/(?P<product_pk>\d+)/$',
                login_required(self.wishlists_create_view.as_view()),
                name='wishlists-create-with-product'),
            # Wishlists can be publicly shared, no login required
            url(r'wishlists/(?P<key>[a-z0-9]+)/$',
                self.wishlists_detail_view.as_view(), name='wishlists-detail'),
            url(r'wishlists/(?P<key>[a-z0-9]+)/update/$',
                login_required(self.wishlists_update_view.as_view()),
                name='wishlists-update'),
            url(r'wishlists/(?P<key>[a-z0-9]+)/delete/$',
                login_required(self.wishlists_delete_view.as_view()),
                name='wishlists-delete'),
            url(r'wishlists/(?P<key>[a-z0-9]+)/lines/(?P<line_pk>\d+)/delete/',
                login_required(self.wishlists_remove_product_view.as_view()),
                name='wishlists-remove-product'),
            url(r'wishlists/(?P<key>[a-z0-9]+)/products/(?P<product_pk>\d+)/'
                r'delete/',
                login_required(self.wishlists_remove_product_view.as_view()),
                name='wishlists-remove-product'),
            url(r'wishlists/(?P<key>[a-z0-9]+)/lines/(?P<line_pk>\d+)/move-to/'
                r'(?P<to_key>[a-z0-9]+)/$',
                login_required(self.wishlists_move_product_to_another_view
                               .as_view()),
                name='wishlists-move-product-to-another'),
            url(_(r'^profile/(?P<pk>\d+)/$'),
                self.forum_profile_detail_view.as_view(), name='profile'),
            url(_(r'^profile/(?P<pk>\d+)/posts/$'), self.user_posts_list.as_view(),
                name='user_posts'),
            url(_(r'^profile/edit/$'),
                self.forum_profile_update_view.as_view(), name='profile_update'),

            url(_(r'^subscriptions/$'), self.topic_subscription_list_view.as_view(),
                name='user_subscriptions'),

            url(_(r'^topic/(?P<pk>\d+)/subscribe/$'),
                self.topic_subscribe_view.as_view(), name='topic_subscribe'),
            url(_(r'^topic/(?P<pk>\d+)/unsubscribe/$'),
                self.topic_unsubscribe_view.as_view(), name='topic_unsubscribe'),
            url(_(r'^topic/(?P<slug>[\w-]+)-(?P<pk>\d+)/lock/$'),
                self.topic_lock_view.as_view(), name='topic_lock'),
            url(_(r'^topic/(?P<slug>[\w-]+)-(?P<pk>\d+)/unlock/$'),
                self.topic_unlock_view.as_view(), name='topic_unlock'),
            url(_(r'^topic/(?P<slug>[\w-]+)-(?P<pk>\d+)/delete/$'),
                self.topic_delete_view.as_view(), name='topic_delete'),
            url(_(r'^topic/(?P<slug>[\w-]+)-(?P<pk>\d+)/move/$'),
                self.topic_move_view.as_view(), name='topic_move'),
            url(_(r'^topic/(?P<slug>[\w-]+)-(?P<pk>\d+)/change/topic/$'),
                self.topic_update_to_normal_topic_view.as_view(), name='topic_update_to_post'),
            url(_(r'^topic/(?P<slug>[\w-]+)-(?P<pk>\d+)/change/sticky/$'),
                self.topic_update_to_sticky_topic_view.as_view(), name='topic_update_to_sticky'),
            url(_(r'^topic/(?P<slug>[\w-]+)-(?P<pk>\d+)/change/announce/$'),
                self.topic_update_to_announce_view.as_view(), name='topic_update_to_announce'),
            url(_(r'^queue/$'), self.moderation_queue_list_view.as_view(), name='queue'),
            url(_(r'^queue/(?P<pk>\d+)/$'),
                self.moderation_queue_detail_view.as_view(), name='queued_post'),
            url(_(r'^queue/(?P<pk>\d+)/approve/$'),
                self.post_approve_view.as_view(), name='approve_queued_post'),
            url(_(r'^queue/(?P<pk>\d+)/disapprove/$'),
                self.post_disapprove_view.as_view(), name='disapprove_queued_post'),

]

        return self.post_process_urls(urls)


application = CustomerApplication()
