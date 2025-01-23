export const logout = async (req, res) => {
  try {
    res.clearCookie("reftoken");
    res.status(200).json({ message: "Logged out successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
