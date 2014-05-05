require 'test_helper'

class MailboxTest < ActionMailer::TestCase
  def test_contact
    # Test invalid message.
    message = messages(:bad)
    assert !(message.valid?)
    assert message.errors.added? :name, :blank
    assert message.errors.added? :content, :blank
    assert message.errors.added? :email, :invalid

    # Test valid message.
    message = messages(:good)

    # Send the email, then test that it got queued.
    email = Mailbox.contact(message).deliver
    assert !ActionMailer::Base.deliveries.empty?
    
    # Test email contents.
    assert_equal [Figaro.env.GMAIL_USERNAME], email.to
    assert_equal "New message from Smockle.", email.subject
    assert_match(/Dear Smockle,\r\n\r\n#{message.content}\r\n\r\nSincerely,\r\n#{message.name}\r\n#{message.email}/, email.encoded)
    # assert_match(/<p>Dear Smockle,<\/p>\r\n<p>#{message.content}<\/p>\r\n<p style=\"margin-bottom: 0;\">Sincerely,<\/p>\r\n<p style=\"margin-bottom: 0;\">#{message.name}<\/p>\r\n<p style=\"margin-bottom: 0;\">#{message.email}<\/p>/, email.encoded)
  end
end
