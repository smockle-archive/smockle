require 'test_helper'

class MailboxTest < ActionMailer::TestCase
  def test_contact
    message = messages(:one)

    # Send the email, then test that it got queued
    email = Mailbox.contact(message).deliver
    assert !ActionMailer::Base.deliveries.empty?

    # Test the body of the sent email contains what we expect it to
    assert_equal [message.email], email.to
    assert_equal "New message from Smockle.", email.subject
    assert_match(/Dear Smockle,#{message.content}Sincerely,#{message.name}#{message.email}/, email.encoded)
    assert_match(/<p>Dear Smockle,<\/p><p><%= #{message.content} %><\/p><p style="margin-bottom: 0;">Sincerely,<\/p><p style="margin-bottom: 0;"><%= #{message.name} %><\/p><p style="margin-bottom: 0;"><%= #{message.email} %><\/p>/, email.encoded)
  end
end
