class User < ApplicationRecord
  validates :email, :password_digest, :session_token, presence: true
  validates  :first_name, :last_name, :dob, :portfolio_value, presence: true 

  attr_reader :password 

  after_initialize :ensure_session_token , :ensure_portfolio_value

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email) 
    return nil unless user && user.valid_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.pasword_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save! 
    self.session_token 
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def ensure_portfolio_value
    self.portfolio_value = 100000
  end
end
